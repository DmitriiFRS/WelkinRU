export async function fetchGraphqlData(queryParam: string) {
   try {
      const url = "https://welkingroup.ru/wpgraphql";
      const headers = { "Content-type": "application/json", Authorization: `Bearer ${process.env.WP_JWT_TOKEN}` };
      const req = await fetch(url, {
         next: { revalidate: 60 },
         method: "POST",
         headers,
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
