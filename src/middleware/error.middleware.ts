export default (err: Error, _: any, res: any, __: any) => {
  res.status(400).json({ message: err.message });
};
