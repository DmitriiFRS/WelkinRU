export async function fetchGraphqlData(queryParam: string) {
   try {
      const req = await fetch("https://welkingroup.ru/graphql", {
         next: { revalidate: 60 },
         method: "POST",
         headers: { "Content-type": "application/json" },
         body: JSON.stringify({
            query: queryParam,
         }),
      });
      if (req.status > 300) {
         fetchGraphqlData(queryParam);
      }
      return req.json();
   } catch (error: any) {
      return { error: error.message };
   }
}
