import React, { useEffect, useState } from "react";
import {
  Modal,
  Button,
  TextInput,
  Textarea,
  Select,
  Group,
} from "@mantine/core";
import { isEmail, isNotEmpty, useForm } from "@mantine/form";
import { useDispatch } from "react-redux";
import { addAppointment } from "../redux/actions/appointmentActions";
import axios from "axios";
import Doctor from "../types";
import { DateInput } from "@mantine/dates";

const AppointmentModal: React.FC = () => {
  const [opened, setOpened] = useState(false);
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [dateValue, setDateValue] = useState<Date | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get<Doctor[]>("http://localhost:3333/api/doctors")
      .then((response) => {
        setDoctors(response.data);
      })
      .catch((error) => {
        console.error("Error fetching doctors:", error);
      });
  }, []);

  const form = useForm({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      description: "",
      doctor: "",
      timeSlot: "",
      date: null,
    },

    validate: {
      firstName: isNotEmpty('firstname is required'),
      lastName: isNotEmpty('firstname is required'),
      email: isEmail('Invalid email'),
      phone: (value) => {
        const phoneRegex = /^\+?[1-9]\d{1,14}$/;
        if (!value) {
          return "Phone number is required";
        } else if (!phoneRegex.test(value)) {
          return "Invalid phone number";
        }
        return null;
      },
      doctor: isNotEmpty('please select a doctor'),
      timeSlot: isNotEmpty('please select a time'),
      date: isNotEmpty('date is required'),
    },
  });

  const handleSubmit = (values: typeof form.values) => {
    dispatch(addAppointment(values));
    console.log("Form submitted:", values);
  };

  return (
    <>
      <Button
        onClick={() => setOpened(true)}
        radius="xl"
        style={{ backgroundColor: "#006D64" }}
      >
        Book Appointment
      </Button>

      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Book an Appointment"
        centered
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
            mt="md"
          />
          <DateInput
            value={dateValue}
            onChange={setDateValue}
            label="Appointment Date"
            placeholder="Select date"
            mt="md"
          />

          <Select
            label="Select Time Slot"
            placeholder="Pick a time"
            {...form.getInputProps("timeSlot")}
            data={[
              "09:00 AM - 10:00 AM",
              "10:00 AM - 11:00 AM",
              "11:00 AM - 12:00 PM",
              "01:00 PM - 02:00 PM",
              "02:00 PM - 03:00 PM",
              "03:00 PM - 04:00 PM",
              "04:00 PM - 05:00 PM",
            ]}
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
      </Modal>
    </>
  );
};

export default AppointmentModal;
