export async function fetchGraphqlData(queryParam: string) {
   try {
      const req = await fetch("https://welkingroup.ru/wpgraphql", {
         next: { revalidate: 60 },
         method: "POST",
         headers: { "Content-type": "application/json" },
         body: JSON.stringify({
            query: queryParam,
         }),
      });
      if (req.status > 300) {
         throw new Error(`Ошибка запроса: ${req.status}`);
      }
      return req.json();
   } catch (error: any) {
      return { error: error.message };
   }
}
