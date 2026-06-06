import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import HeaderTWW from "@/components/headers/HeaderTWW";
import Footer1 from "@/components/footers/Footer1";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { buildMetadata } from "@/utils/seo";
import styles from "../blog.module.css";

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
    tags: post.tags,
    publishedTime: post.date ? new Date(post.date).toISOString() : undefined,
    author: post.author,
    type: "article",
  });
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "long", day: "numeric", year: "numeric",
  });
}

export default async function BlogPostPage({ params }) {
  notFound();
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
          <HeaderTWW />
        </nav>
        <main id="main">

          {/* Full-bleed 16:9 hero with post image */}
          {post.image && (
            <div className={styles.detailHero}>
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="100vw"
                className={styles.detailHeroImg}
                priority
              />
              <div className={styles.detailHeroOverlay} />
              <div className={styles.detailHeroContent}>
                <div className="container">
                  {post.category && (
                    <span className={styles.detailCategory}>{post.category}</span>
                  )}
                  <h1 className={styles.detailTitle}>{post.title}</h1>
                  <div className={styles.detailMeta}>
                    {post.date && <span>{formatDate(post.date)}</span>}
                    {post.readTime && (
                      <>
                        <span className={styles.detailMetaDot} />
                        <span>{post.readTime}</span>
                      </>
                    )}
                    {post.author && (
                      <>
                        <span className={styles.detailMetaDot} />
                        <span>{post.author}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Article */}
          <div className="container">
            <article className={styles.article}>

              {/* Prose content */}
              <div className={styles.prose}>
                <MDXRemote source={post.content} />
              </div>

              {/* Tags */}
              {post.tags?.length > 0 && (
                <div className={styles.articleTags}>
                  <span className={styles.articleTagLabel}>Tags:</span>
                  {post.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              )}

              {/* Prev / Next */}
              {(prev || next) && (
                <div className={styles.postNav}>
                  {prev ? (
                    <Link href={`/blog/${prev.slug}`} className={styles.postNavItem}>
                      <span className={styles.postNavDir}>
                        <i className="mi-arrow-left" aria-hidden="true" /> Previous
                      </span>
                      <span className={styles.postNavTitle}>{prev.title}</span>
                    </Link>
                  ) : <div />}
                  {next && (
                    <Link href={`/blog/${next.slug}`} className={`${styles.postNavItem} ${styles.right}`}>
                      <span className={styles.postNavDir}>
                        Next <i className="mi-arrow-right" aria-hidden="true" />
                      </span>
                      <span className={styles.postNavTitle}>{next.title}</span>
                    </Link>
                  )}
                </div>
              )}

              <Link href="/blog" className={styles.backLink}>
                <i className="mi-arrow-left" aria-hidden="true" /> All articles
              </Link>

            </article>
          </div>

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
