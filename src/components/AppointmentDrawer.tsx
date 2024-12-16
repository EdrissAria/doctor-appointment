import React, { useEffect, useState } from "react";
import {
  Drawer,
  Button,
  TextInput,
  Textarea,
  Select,
  Group,
} from "@mantine/core";
import { useFetchDoctors } from "../hooks/useFetchDoctors";
import { isEmail, isNotEmpty, useForm } from "@mantine/form";
import { useDispatch, useSelector } from "react-redux";
import { addAppointment } from "../redux/actions/appointmentActions";
import Doctor, { Appointment } from "../types";
import { showNotification } from "../redux/actions/notificationActions";

const AppointmentDrawer: React.FC<{ opened: boolean; onClose: () => void }> = ({
  opened,
  onClose,
}) => {
  const { doctors } = useFetchDoctors();
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [timeSlots, setTimeSlots] = useState<string[]>([]);
  const dispatch = useDispatch();

  const appointments: Appointment[] = useSelector(
    (state: any) => state.appointments.appointments
  );

  useEffect(() => {
    if (selectedDoctor) {
      const bookedSlots = appointments
        .filter(
          (appointment: any) => appointment.doctor.id === selectedDoctor.id
        )
        .map((appointment: any) => appointment.timeSlot);

      setTimeSlots(
        selectedDoctor.availability.flatMap((slot) =>
          slot.slots
            .map((time) => `${slot.day} ${time}`)
            .filter((timeSlot) => !bookedSlots.includes(timeSlot))
        )
      );
    }
  }, [selectedDoctor, appointments]);

  const form = useForm({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      description: "",
      doctor: "",
      timeSlot: "",
    },

    validate: {
      firstName: isNotEmpty("First name is required"),
      lastName: isNotEmpty("Last name is required"),
      email: isEmail("Invalid email"),
      phone: (value) => {
        const phoneRegex = /^\+?[1-9]\d{1,14}$/;
        if (!value) {
          return "Phone number is required";
        } else if (!phoneRegex.test(value)) {
          return "Invalid phone number";
        }
        return null;
      },
      doctor: isNotEmpty("Please select a doctor"),
      timeSlot: isNotEmpty("Please select a time"),
    },
  });

  const handleSubmit = (values: typeof form.values) => {
    if (selectedDoctor) {
      const appointment: Appointment = {
        ...values,
        doctor: selectedDoctor,
      };
      dispatch(addAppointment(appointment));
      dispatch(showNotification("Appointment booked successfully!", "success"));

      onClose();
    } else {
      form.setFieldError("doctor", "Please select a doctor");
      dispatch(showNotification("Failed to book the appointment.", "error"));
    }
  };

  return (
    <Drawer
      opened={opened}
      onClose={onClose}
      title="Book an Appointment"
      padding="xl"
      size="lg"
      position="right"
    >
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <TextInput
          label="First Name"
          placeholder="John"
          {...form.getInputProps("firstName")}
        />
        <TextInput
          label="Last Name"
          placeholder="Doe"
          {...form.getInputProps("lastName")}
          mt="md"
        />
        <TextInput
          label="Email"
          placeholder="john.doe@example.com"
          {...form.getInputProps("email")}
          mt="md"
        />
        <TextInput
          label="Phone"
          placeholder="+1234567890"
          {...form.getInputProps("phone")}
          mt="md"
        />
        <Textarea
          label="Description"
          placeholder="Describe your issue"
          {...form.getInputProps("description")}
          mt="md"
        />
        <Select
          label="Choose Doctor"
          placeholder="Pick one"
          {...form.getInputProps("doctor")}
          data={doctors.map((doctor) => doctor.name)}
          onChange={(name) => {
            const doctor = doctors.find((d) => d.name === name);
            setSelectedDoctor(doctor || null);
            form.setFieldValue("doctor", name!);
          }}
          mt="md"
        />
        <Select
          label="Select Time Slot"
          placeholder="Pick a time"
          {...form.getInputProps("timeSlot")}
          data={timeSlots}
          mt="md"
        />
        <Group mt="md">
          <Button
            type="submit"
            radius="xl"
            style={{ backgroundColor: "#006D64" }}
          >
            Submit
          </Button>
        </Group>
      </form>
    </Drawer>
  );
};

export default AppointmentDrawer;
