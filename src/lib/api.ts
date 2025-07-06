import { Post } from "@/interfaces/post";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs(company: string) {
  const companiesPostsDirectory = join(postsDirectory, company);
  return fs.readdirSync(companiesPostsDirectory);
}

export enum Companies {
  ErsanKuajingNet = "23kuajingnet",
  FujianIncaCoffeeTrading = "fujian-inca-coffee-trading",
}

export function get23KuajingPostBySlug(slug: string) {
  // const realSlug = slug.replace(/\.md$/, "");
  // const testPath = join(postsDirectory, `${realSlug}`);
  // if (!fs.existsSync(testPath) || !fs.lstatSync(testPath).isFile()) {
  //   throw new Error(`${testPath} does not exist or is not a file`);
  // } else {
  //   const fullFilePath = join(postsDirectory, `${realSlug}.md`);
  //   const fileContents = fs.readFileSync(fullFilePath, "utf8");
  //   const { data, content } = matter(fileContents);

  //   return { ...data, slug: realSlug, content } as Post;
  return getPostByCompanyAndSlug(Companies.ErsanKuajingNet, slug)
}

export function getFujianIncaCoffeeTradingPostBySlug(slug: string) {
  return getPostByCompanyAndSlug(Companies.FujianIncaCoffeeTrading, slug)
}


export function getPostByCompanyAndSlug(company: string, slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, company, `${realSlug}.md`);
  if (!fs.existsSync(fullPath) || !fs.lstatSync(fullPath).isFile()) {
    return null;
  }
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Post;
}

export function getAllFrontPagePosts(): Post[] {
  const slugs = getPostSlugs(Companies.ErsanKuajingNet);
  console.log('all post slugs >> ', slugs)
  const posts = slugs
    .map((slug) => get23KuajingPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

export function getSubCompaniesPagePosts(company: Companies): Post[] {
  const slugs = getPostSlugs(company);
  console.log('all post slugs >> ', slugs)
  const posts = slugs
    .map((slug) => getPostByCompanyAndSlug(company, slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
