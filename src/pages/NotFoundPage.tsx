import { seo } from "../data/site";
import { Seo } from "../components/Seo";
import { ButtonLink } from "../components/Button";

export default function NotFoundPage() {
  return (
    <>
      <Seo {...seo.notFound} noindex />
      <section className="flex min-h-[80vh] items-center bg-paper pt-32 pb-20">
        <div className="container-page">
          <div className="max-w-2xl border-l-4 border-moss-600 pl-6">
            <p className="label text-steel-500">Error 404</p>
            <h1 className="mt-4 text-3xl font-semibold sm:text-5xl">Page not found.</h1>
            <p className="mt-4 text-steel-600">The link may be out of date or the page may have moved.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/" variant="secondary" size="lg" arrow>
                Back to home
              </ButtonLink>
              <ButtonLink href="/contact" variant="outline" size="lg">
                Contact us
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
