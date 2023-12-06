function picsumAdapter(data: any) {
  return {
    id: data.id,
    author: data.author,
    image: data.download_url,
  };
}

export { picsumAdapter };
