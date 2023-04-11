import { useMemo } from "react";

export const usePagination = (totalPages) => {
   const pagesMemo = useMemo(() => {
      let pagesArray = []
      for (let i = 0; i < totalPages; i++) {
         pagesArray.push(i + 1);
         console.log('пересчёт')
      }
      console.log(pagesArray);
      return pagesArray;
   }, [totalPages])
   return pagesMemo
}