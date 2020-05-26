export const BUY_CAKE = 'BUY_CAKE'

export const buyCake = (number = 1) => {
  console.log('number.target')
  console.log(number)
  console.log(number.currentTarget)
  return {
    type: BUY_CAKE,
    payload: number
  };
};