import { Container, Title, Text, Button, Grid, Flex } from '@mantine/core';
import BlogCard from '../BlogCard';

const blogPosts = [
  {
    title: 'Preventing preeclampsia may be as simple as taking an aspirin',
    category: 'Women’s Health',
    date: 'Feb 28, 2022',
    description: 'Preeclampsia is a complication of pregnancy that can cause severe health issues. While it can happen during any pregnancy, certain factors increase its likelihood.',
    image: 'https://i0.wp.com/www.sciencenews.org/wp-content/uploads/2021/09/090721_lh_50ya-aspirin-pregnancy_feat.jpg',
  },
  {
    title: 'Take the lead on lead poisoning',
    category: 'Child & Teen Health',
    date: 'Feb 20, 2022',
    description: 'The use of lead in consumer products has been banned in the United States since 1978, but lead exposure is still a serious problem today, especially for children.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0PjNzPqshrzr24l-TJXSa6AnjAa8FmJqu_A&s', 
  },
  {
    title: 'Skin in the game: Two common skin problems and solutions for Women',
    category: 'Women’s Health',
    date: 'Feb 20, 2022',
    description: 'Dry skin and rashes affect our skin after many years. There are several treatment options for both conditions, and steps we can take to prevent them from occurring or returning.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7iFUautTAY2WNfJZd2ToDjyglynScnwQ8WA&s',
  },
];

const BlogSection:React.FC  = () => {
  return (
    <Container size="xl" p={50} style={{ backgroundColor: "#e8f8f5" }}>
      <Flex direction="column" align="center" style={{ marginBottom: '2rem' }}>
        <Text color="teal" mb={10}>Our Blog</Text>
        <Title order={2} mb={10}>Our Latest Blogs</Title>
        <Text size="sm" color="dimmed">Follow the latest articles & news</Text>
      </Flex>

      <Grid>
        {blogPosts.map((post, index) => (
          <Grid.Col span={4} mb={4} key={index}>
            <BlogCard
              image={post.image}
              category={post.category}
              title={post.title}
              date={post.date}
              description={post.description}
            />
          </Grid.Col>
        ))}
      </Grid>

      <Flex justify="center" style={{ marginTop: '2rem' }}>
        <Button radius={50} variant="outline" color="teal">Browse all</Button>
      </Flex>
    </Container>
  );
};

export default BlogSection;
