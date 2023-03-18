import { Fragment } from "react";
import Head from "next/head";
import BlogItem from "../components/blogItem/BlogItem";
import initFirebase from "../firebase/initfirebase";

initFirebase()

const BLOG_POST = [
  {
    id: 1,
    title: "First Test blog",
    image:
      "https://im.rediff.com/sports/2023/mar/15cristiano-ronaldo.jpg?w=670&h=900",
    desc: "having fun",
    slug: "first-blog"
  },
  {
    id: 2,
    title: "Second Test blog",
    image:
      "https://im.rediff.com/sports/2023/mar/15cristiano-ronaldo.jpg?w=670&h=900",
    desc: "having fun",
    slug: "second-blog",
  },
];

function Home() {
  return (
    <Fragment>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Sono&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <h1 className="text-center text-lg mx-1 my-4">BLOG PAGE</h1>
      {BLOG_POST.map((blog) => {
        return (
          <div key={blog.id} className="flex flex-col">
            <BlogItem
              title={blog.title}
              image={blog.image}
              desc={blog.desc}
              slug={blog.slug}
            />
          </div>
        );
      })}
    </Fragment>
  );
}

export default Home;
