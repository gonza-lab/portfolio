import Data from '../interfaces/Data';

const divideBySection = (data: Data[]) => {
  const dataDivided = data.reduce(
    (prev, curr) => ({ ...prev, [curr.ref]: curr }),
    {}
  );

  return dataDivided;
};
export default divideBySection;
