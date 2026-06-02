import Link from "next/link";
import Image from "next/image";
import HeaderAMW from "@/components/headers/HeaderAMW";
import Footer1 from "@/components/footers/Footer1";
import ImageBackground from "@/components/common/ImageBackground";
import AnimatedText from "@/components/common/AnimatedText";
import { getAllPosts } from "@/lib/blog";
import { buildMetadata } from "@/utils/seo";

export const metadata = buildMetadata({
  title: "Blog | Hardscape Tips & Project Ideas",
  description:
    "Helpful guides, project ideas, and expert tips from AMW Hardscape Solutions — serving San Tan Valley, Queen Creek, Gilbert & the East Valley.",
  path: "/blog",
});

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="theme-main">
      <div className="page" id="top">
        <nav className="main-nav transparent stick-fixed wow-menubar light-content dark" data-light-nav="true">
          <HeaderAMW />
        </nav>
        <main id="main">
          {/* Hero */}
          <section className="page-section pt-0 pb-0" id="home">
            <section className="page-section bg-dark-1 bg-dark-alpha-50 light-content amw-fixed-bg-host">
              <ImageBackground src="/assets/tww-assets/amw-images/Patio_pavers_installed_in_backyard_202605131833.jpeg" alt="" fixed priority />
              <div className="container position-relative pt-100 pb-80">
                <div className="text-center">
                  <div className="row">
                    <div className="col-md-8 offset-md-2">
                      <h1 className="hs-title-1 mb-20">
                        <AnimatedText text="Blog" />
                      </h1>
                      <p className="section-descr mb-0 wow fadeIn" data-wow-delay="0.2s" data-wow-duration="1.2s">
                        What we&rsquo;ve learned doing this work in the Arizona heat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>

          {/* Post Grid */}
          <section className="page-section">
            <div className="container relative">
              {posts.length === 0 ? (
                <div className="text-center py-60">
                  <p className="text-gray">No posts yet — check back soon.</p>
                </div>
              ) : (
                <div className="row mt-n50">
                  {posts.map((post) => (
                    <div key={post.slug} className="col-md-6 col-lg-4 mt-50">
                      <div className="blog-item">
                        {post.image && (
                          <div className="blog-item-image">
                            <Link href={`/blog/${post.slug}`}>
                              <Image
                                src={post.image}
                                alt={post.title}
                                width={800}
                                height={450}
                                className="wow scaleOutIn"
                                data-wow-duration="1.2s"
                                style={{ width: "100%", height: "auto" }}
                              />
                            </Link>
                          </div>
                        )}
                        <div className="blog-item-body">
                          <div className="blog-item-data">
                            {post.date && (
                              <span className="me-3">
                                <i className="mi-clock size-16" />{" "}
                                {new Date(post.date).toLocaleDateString("en-US", {
                                  month: "long",
                                  day: "numeric",
                                  year: "numeric",
                                })}
                              </span>
                            )}
                            {post.author && (
                              <span>
                                <i className="mi-user size-16" /> {post.author}
                              </span>
                            )}
                          </div>
                          <h2 className="blog-item-title">
                            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                          </h2>
                          {post.description && (
                            <p className="text-gray">{post.description}</p>
                          )}
                          <Link href={`/blog/${post.slug}`} className="link-hover-anim underline">
                            Read more <i className="mi-arrow-right" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        </main>
        <Footer1 />
      </div>
    </div>
  );
}
