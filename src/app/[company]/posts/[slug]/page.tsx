import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSubCompaniesPagePosts, getPostByCompanyAndSlug, Companies } from "@/lib/api";
import { CMS_NAME } from "@/lib/constants";
import markdownToHtml from "@/lib/markdownToHtml";
import Alert from "@/app/_components/alert";
import Container from "@/app/_components/container";
import Header from "@/app/_components/header";
import { PostBody } from "@/app/_components/post-body";
import { PostHeader } from "@/app/_components/post-header";

function findCompanyPost(params: any) {
  let post = null;
  try {
    let companySlug = params.company;
    if (params.company === 'coffee') {
      companySlug = Companies.FujianIncaCoffeeTrading
    }
    post = getPostByCompanyAndSlug(companySlug, params.slug);
  } catch (err) {
    console.error(err)
    return null;
  }
  return post
}

export default async function Post(props: Params) {
  const params = await props.params;

  let post = findCompanyPost(params);
  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <main>
      <Alert preview={post.preview} />
      <Container>
        <Header />
        <article className="mb-32">
          <PostHeader
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
          />
          <PostBody content={content} />
        </article>
      </Container>
    </main>
  );
}

type Params = {
  params: Promise<{
    slug: string;
    company: string;
  }>;
};

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  let post = findCompanyPost(params);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | Next.js Blog Example with ${CMS_NAME}`;

  return {
    title,
    openGraph: {
      title,
      images: [post.ogImage.url],
    },
  };
}

export async function generateStaticParams() {
  // TODO replace with dynamic company
  const posts = getSubCompaniesPagePosts(Companies.FujianIncaCoffeeTrading);

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
