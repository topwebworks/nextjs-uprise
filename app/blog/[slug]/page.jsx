import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import HeaderAMW from "@/components/headers/HeaderAMW";
import Footer1 from "@/components/footers/Footer1";
import ImageBackground from "@/components/common/ImageBackground";
import AnimatedText from "@/components/common/AnimatedText";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { buildMetadata } from "@/utils/seo";

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    image: post.image,
  });
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const all = getAllPosts();
  const idx = all.findIndex((p) => p.slug === slug);
  const prev = all[idx + 1] ?? null;
  const next = all[idx - 1] ?? null;

  return (
    <div className="theme-main">
      <div className="page" id="top">
        <nav className="main-nav transparent stick-fixed wow-menubar light-content dark" data-light-nav="true">
          <HeaderAMW />
        </nav>
        <main id="main">
          {/* Hero */}
          <section className="page-section pt-0 pb-0" id="home">
            <section className="page-section bg-dark-1 bg-dark-alpha-60 light-content amw-fixed-bg-host amw-secondary-hero">
              <ImageBackground src="/assets/tww-assets/amw-images/IMG_4280.HEIC.jpg" alt="" fixed priority />
              <div className="container position-relative pt-50 pb-30">
                <div className="text-center">
                  <div className="row">
                    <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                      <h1 className="hs-title-1 mb-20">
                        <AnimatedText text={post.title} />
                      </h1>
                      <div className="blog-item-data mt-20 mb-0 wow fadeInUp" data-wow-delay="0.2s">
                        {post.date && (
                          <span className="d-inline-block me-3">
                            <i className="mi-clock size-16" />{" "}
                            {new Date(post.date).toLocaleDateString("en-US", {
                              month: "long",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </span>
                        )}
                        {post.author && (
                          <span className="d-inline-block me-3">
                            <i className="mi-user size-16" /> {post.author}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>

          {/* Post Body */}
          <section className="page-section">
            <div className="container relative">
              <div className="row">
                <div className="col-lg-8 offset-lg-2">
                  <div className="blog-item mb-80 mb-xs-40">
                    {post.image && (
                      <div className="blog-media mb-40 mb-xs-30">
                        <Image
                          src={post.image}
                          alt={post.title}
                          width={1200}
                          height={675}
                          style={{ width: "100%", height: "auto" }}
                          priority
                        />
                      </div>
                    )}
                    <div className="blog-item-body">
                      <div className="mdx-content">
                        <MDXRemote source={post.content} />
                      </div>
                    </div>
                  </div>

                  {/* Prev / Next */}
                  {(prev || next) && (
                    <div className="clearfix mt-40 mb-40">
                      {prev && (
                        <Link href={`/blog/${prev.slug}`} className="blog-item-more left">
                          <i className="mi-chevron-left" /> Prev post
                        </Link>
                      )}
                      {next && (
                        <Link href={`/blog/${next.slug}`} className="blog-item-more right">
                          Next post <i className="mi-chevron-right" />
                        </Link>
                      )}
                    </div>
                  )}

                  <div className="mt-20">
                    <Link href="/blog" className="link-hover-anim underline">
                      <i className="mi-arrow-left" /> Back to blog
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer1 />
      </div>
    </div>
  );
}
