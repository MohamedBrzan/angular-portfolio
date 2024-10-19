export default interface Experience {
  title: string;
  date: {
    from: string;
    to?: string;
  };
  image: string;
  desc: string;
  url: {
    link: string;
    name: string;
  };
}
