import { H3Event } from 'h3';
import { compose, enhance, EnhancerBuilder } from "@uniformdev/canvas";
import { contentfulModelConverter } from "../../enhancers/helpers"


import doEnhanceCS from "../../enhancers/contentful";



export default defineEventHandler(async (event: H3Event) => {
  const body = await useBody(event)
  const composition = body.composition
  const enhancedComposition = await doEnhanceCS(composition) // eslint-disable-line no-console')
  return { composition };
})

