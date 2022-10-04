

import connectMongo from '../../utils/connectMongo';
import Test from '../../models/testModel';

export const getServerSideProps = async () => {
  try {
   
    await connectMongo();
    const tests = await Test.find();

    return {
      props: {
        tests: JSON.parse(JSON.stringify(tests)),
      },
      
    };
   
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
};

