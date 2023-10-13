import Filter from "@/components/Filter"
import Header from "@/components/Header";
import ResourceCard from "@/components/ResourceCard";
import SearchForm from "@/components/SearchForm"
import { getResources, getResourcesPlaylist } from "@/sanity/actions"

export const revalidate = 900;

interface Props {
  searchParams: { [key: string]: string | undefined }
}
export default async function Page({ searchParams }: Props) {
  const resources = await getResources({
    query: searchParams.query || '',
    category: searchParams?.category || '',
    page: '1'
  });
  const resourcesPlayList = await getResourcesPlaylist();

  return (
    <main className="flex-center paddings mx-auto w-full max-w-screen-2xl flex-col">
      <section className="nav-padding w-full">
        <div className="flex-center relative w-full flex-col min-h-[274px] rounded-xl bg-banner bg-cover bg-center text-center">
          <h1 className="sm:heading1 heading2 mb-6 text-center text-white">Course Library For Developers</h1>
        </div>
        <SearchForm />
      </section>
      <Filter />
      {
        (searchParams.query || searchParams.category) && (
          <section className="flex-center mt-6 w-full flex-col sm:mt-20">
            <Header type="Resources" query={searchParams?.query || ''} category={searchParams?.category || ''} />
            <div className="mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start">
              {
                resources?.length > 0 ? (
                  resources.map((resource: any, i: number) => (

                    <ResourceCard
                      key={i}
                      title={resource.title}
                      image={resource.image}
                      downloadNumber={resource.views}
                      id={resource._id}
                      downloadLink={resource.downloadLink}
                    />
                  ))
                ) : (
                  <div className="w-full flex-center">
                    <p className="text-white text-center font-semibold">Oops! no course available here</p>
                  </div>
                )
              }
            </div>
          </section>
        )
      }
      {
        resourcesPlayList?.map((item: any, i: number) => (
          <section key={i} className="flex-center mt-6 w-full flex-col sm:mt-20">
            <h1 className="heading3 self-start text-white-800">{resources.title}</h1>
            <div className="mt-12 flex w-full justify-center flex-wrap gap-16 sm:justify-start">
              {
                item.resources?.length > 0 ? (
                  item.resources.map((resource: any, i: number) => (
                    <ResourceCard
                      key={i}
                      title={resource.title}
                      image={resource.image}
                      downloadNumber={resource.views}
                      id={resource._id}
                      downloadLink={resource.downloadLink}
                    />
                  ))
                ) : null
              }
            </div>
          </section>
        ))
      }
    </main>
  )
}
