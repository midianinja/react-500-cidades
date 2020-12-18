const ida = async() => (await import('@resystem/ida-js-sdk'));

const idaConfiguration = {
  appId: process.env.REACT_APP_IDA_APP_ID,
  appKey: process.env.REACT_APP_IDA_APP_KEY,
};

export default ({ onAuthChange }) => new Promise(async (res, rej) => {
  const localIda = await ida();
  console.log('ida', ida());
  await localIda.initializeApp({
    ...idaConfiguration,
    onAuthChange,
    onLoad: (payload) => res(payload),
    onOpen: (data) => console.log('IDA ABERTO!!!!!!!!!!!!!!!!', data)
  });
});


export const openIDASignin = async (ida) => {
  console.log('ida', ida);
  try {
    await ida.signinWithPopup();
  } catch (err) {
    console.log([err]);
  }
};