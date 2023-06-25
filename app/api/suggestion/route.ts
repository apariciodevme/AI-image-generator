export async function GET(request: Request) {
  //This will connect to Azure
  const response = await fetch("...", {
    cache: "no-store",
  });

  const textData = await response.text();

  return new Response(JSON.stringify(textData.trim()), {
    status: 200,
  });
}
