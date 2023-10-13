import { Skeleton } from "@/components/ui/skeleton"

const loading = () => {
 return (
  <main className="paddings mx-auto w-full max-w-screen-2xl flex flex-col flex-center">
   <section className="w-full nav-padding">
    <Skeleton className="h-[274px] rounded-lg" />
   </section>
   <section className="w-full mt-6 flex flex-col sm:mt-20">
    <Skeleton className="h-10 w-56" />
    <div className="mt-12 flex flex-wrap w-full justify-center gap-16 sm:justify-start">
     <Skeleton className="h-[440px] w-[356px]" />
     <Skeleton className="h-[440px] w-[356px]" />
     <Skeleton className="h-[440px] w-[356px]" />
     <Skeleton className="h-[440px] w-[356px]" />
     <Skeleton className="h-[440px] w-[356px]" />
     <Skeleton className="h-[440px] w-[356px]" />
     <Skeleton className="h-[440px] w-[356px]" />
    </div>
   </section>
  </main>
 )
}

export default loading