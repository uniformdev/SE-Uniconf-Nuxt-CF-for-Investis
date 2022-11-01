import { EnhancerBuilder, enhance } from '@uniformdev/canvas';
import { 
    createContentfulEnhancer,
    ContentfulClientList,
    CANVAS_CONTENTFUL_PARAMETER_TYPES,
} from '@uniformdev/canvas-contentful';
import contentful from 'contentful';

export default function doEnhanceCS(composition: any) {
    const client = contentful.createClient({
        space: process.env.CONTENTFUL_SPACE_ID || ' ',
        environment: process.env.CONTENTFUL_ENVIRONMENT || ' ',
        accessToken: process.env.CONTENTFUL_CDA_ACCESS_TOKEN || ' ',
    });


  return enhance({
    composition,
    enhancers: new EnhancerBuilder().parameterType(
        CANVAS_CONTENTFUL_PARAMETER_TYPES,
        createContentfulEnhancer(
          { client,
          })
    ),
    context: {},
  });
}
