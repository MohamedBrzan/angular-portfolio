export default interface Read {
  title: string;
  image: string;
  desc: string;
  date: {
    from: string;
    to: string;
  }
  url: {
    link: string;
    name: string;
  };
}
