
import ProductDetailsMain from './ProductDetailsMain';

export default async function Page({ params }) {
    const {slug} = await  params
  return <ProductDetailsMain slug={slug} />;
}
