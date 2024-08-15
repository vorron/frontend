import type DataFromBack from './DataFromBack'
import postMethod from './postMethod'

type FN = (...args: any) => any

const $ = <F extends FN>(fn: F) => {
  return async (...args: Parameters<F>) => {
    const result = (await postMethod({ name: fn.name, args })) as DataFromBack
    if (result.log) console.log(result.log)
    if (!result.isOk) throw new Error('back error: ' + result.err)
    return result.result as Awaited<ReturnType<F>>
    // const result= await postData<Awaited<ReturnType<F>>>({ name: fn.name, args })
  }
}

export default $
