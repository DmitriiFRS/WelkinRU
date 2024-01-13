export async function fetchGraphqlData(queryParam: string) {
   try {
      const req = await fetch("http://localhost:1337/graphql", {
         next: { revalidate: 60 },
         method: "POST",
         headers: { "Content-type": "application/json" },
         body: JSON.stringify({
            query: queryParam,
         }),
      });
      if (!req.ok) {
         throw new Error(`Ошибка запроса: ${req.status}`);
      }
      return req.json();
   } catch (error: any) {
      return { error: error.message };
   }
}
