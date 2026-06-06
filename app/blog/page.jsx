import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import HeaderTWW from "@/components/headers/HeaderTWW";
import Footer1 from "@/components/footers/Footer1";
import ImageBackground from "@/components/common/ImageBackground";
import AnimatedText from "@/components/common/AnimatedText";
import { getAllPosts } from "@/lib/blog";
import { buildMetadata } from "@/utils/seo";
import styles from "./blog.module.css";

export const metadata = buildMetadata({
  title: "Blog | Hardscape Tips & Project Ideas",
  description: "Helpful guides, project ideas, and expert tips from Client Business Name — serving the surrounding service area.",
  path: "/blog",
  tags: ["hardscape", "arizona landscaping", "pavers", "artificial turf", "concrete", "san tan valley", "queen creek", "gilbert"],
});

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "long", day: "numeric", year: "numeric",
  });
}

export default function BlogIndexPage() {
  notFound();
  const posts = getAllPosts();

  return (
    <div className="theme-main">
      <div className="page" id="top">
        <nav className="main-nav transparent stick-fixed wow-menubar light-content dark" data-light-nav="true">
          <HeaderTWW />
        </nav>
        <main id="main">

          {/* Hero */}
          <section className="page-section pt-0 pb-0">
            <div className="page-section bg-dark-1 bg-dark-alpha-60 light-content amw-fixed-bg-host amw-secondary-hero">
              <ImageBackground
                src="/assets/tww-assets/tww-images/Suburb_home_with_patio_pool_202605131833.jpeg"
                alt=""
                fixed
                priority
              />
              <div className="container position-relative">
                <div className="row">
                  <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
                    <div className="section-caption mb-20 wow fadeInUp" data-wow-delay="0.1s">
                      From the Field
                    </div>
                    <h1 className="hs-title-1 mb-20">
                      <AnimatedText text="Hardscape tips from the Service Area." />
                    </h1>
                    <p className="section-descr mb-0 wow fadeInUp" data-wow-delay="0.3s">
                      Real guides from a crew that works in Arizona heat every day.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Post grid */}
          <section className="page-section">
            <div className="container">
              {posts.length === 0 ? (
                <div className="text-center py-60">
                  <p className="text-gray">No posts yet — check back soon.</p>
                </div>
              ) : (
                <div className={styles.grid}>
                  {posts.map((post, i) => (
                    <article
                      key={post.slug}
                      className={`${styles.card} wow fadeInUp`}
                      data-wow-delay={`${(i % 3) * 0.1}s`}
                    >
                      {/* 16:9 thumbnail */}
                      <Link href={`/blog/${post.slug}`} className={styles.thumb} aria-label={post.title}>
                        {post.image && (
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            sizes="(max-width: 575px) 100vw, (max-width: 991px) 50vw, 33vw"
                            className={styles.thumbImg}
                          />
                        )}
                        <div className={styles.thumbOverlay} />
                        {post.category && (
                          <span className={styles.category}>{post.category}</span>
                        )}
                      </Link>

                      {/* Card body */}
                      <div className={styles.cardBody}>
                        <div className={styles.meta}>
                          {post.date && <span>{formatDate(post.date)}</span>}
                          {post.readTime && (
                            <>
                              <span className={styles.metaDot} />
                              <span>{post.readTime}</span>
                            </>
                          )}
                        </div>

                        <Link href={`/blog/${post.slug}`} className={styles.cardTitle}>
                          {post.title}
                        </Link>

                        {post.description && (
                          <p className={styles.cardDesc}>{post.description}</p>
                        )}

                        <Link href={`/blog/${post.slug}`} className={styles.cardLink}>
                          Read article <i className="mi-arrow-right" aria-hidden="true" />
                        </Link>

                        {post.tags?.length > 0 && (
                          <div className={styles.tags}>
                            {post.tags.slice(0, 4).map((tag) => (
                              <span key={tag} className={styles.tag}>{tag}</span>
                            ))}
                          </div>
                        )}
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>
          </section>

          {/* CTA band */}
          <section className={styles.ctaBand}>
            <div className="container">
              <p className={styles.ctaBandTitle}>Ready to start your project?</p>
              <p className={styles.ctaBandDesc}>City · City · City · City</p>
              <Link href="/#contact-form" className="btn btn-mod btn-w btn-large btn-round btn-hover-anim">
                <span>Get a Free Estimate</span>
              </Link>
            </div>
          </section>

        </main>
        <Footer1 />
      </div>
    </div>
  );
}
