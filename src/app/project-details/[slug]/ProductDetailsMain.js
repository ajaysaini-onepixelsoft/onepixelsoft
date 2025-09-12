'use client'

import { getProductdetail } from '@/Api/Api';
import React, {  useState } from 'react';
import CommenHero from '@/Commen-components/CommenHero';
import ProjectDetails from '@/components/project-details/ProjectDetails';
import { Loader } from '@/Commen-components/Lodding';

export default function ProductDetailsMain({ slug }) {
  const [productDetail, setProductdetail] = useState(null);
    const fetchProductDetail = async () => {
        const res = await getProductdetail(slug);
        if(res?.slug ===slug ){
            setProductdetail(res); 
        }
    }

    if (slug) {
      fetchProductDetail();
    }

  if (!productDetail) return <div>project detail not found</div>;

  return (
    <div>
      <CommenHero
        data={{
          slug: `project-details-${slug}`,
          heading: `project-details - ${slug}`,
          des: "We will help a client's problems to develop the products they have with high quality Change the appearance.",
        }}
      />
      <ProjectDetails data={productDetail}/>
    </div>
  );
}
