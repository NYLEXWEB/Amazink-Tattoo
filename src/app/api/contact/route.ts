// Deprecated: This API route is no longer used since we reverted back
// to the direct client-side 'mailto' redirect method per user preference.
export async function GET() {
  return Response.json({ message: "This route is deprecated. Mailto is used instead." });
}
