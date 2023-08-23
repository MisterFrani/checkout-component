export class Paygreen {
  constructor() {
    paygreenjs.init({
      publicKey: "pk_6d92047e838d4870b74857ba47e2eebd",
      mode: "instrument",
      paymentMethod: "conecs",
      modeOptions: {
        shopId: "sh_69b974d635c34df18c807baed0794836",
      },
    });
  }
}