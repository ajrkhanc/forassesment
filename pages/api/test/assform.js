import connectMongo from '../../../utils/connectMongo';
import AssesmentF from '../../../models/apiass';


/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function addTest(req, res) {
  try {
    console.log('CONNECTING TO MONGO');
    await connectMongo();
    console.log('CONNECTED TO MONGO');

    console.log('CREATING DOCUMENT');
    const ass = await AssesmentF.create(req.body);
    console.log('CREATED DOCUMENT');

    res.json({ ass });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
