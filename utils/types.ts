export type PageProps = {
  searchParams: Promise<{
    layout?: string;
    search?: string;
    [key: string]: string | string[] | undefined;
  }>;
};
