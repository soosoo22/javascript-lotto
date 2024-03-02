import PurchaseAmountValidator from '../../validators/PurchaseAmountValidator';
import LottoContainer from './LottoContainer';
import ResultPopup from './ResultPopup';
import WinningNumberForm from './WinningNumberForm';
import { $ } from './utils/dom';
// import { doc } from 'prettier';

class App {
  constructor() {
    this.winningNumberForm = new WinningNumberForm({
      $target: $('.winning-number-section'),
    });
  }

  start() {
    this.submitAmountInputForm();
  }

  submitAmountInputForm() {
    $('.purchase-form').addEventListener('submit', (event) => {
      this.handleAmountInputForm(event);
    });
  }

  handleAmountInputForm(event) {
    event.preventDefault();
    const lottoContainer = new LottoContainer();

    try {
      PurchaseAmountValidator.validate(Number($('.purchase-amount').value));
      lottoContainer.createLottoTickets(Number($('.purchase-amount').value));
      lottoContainer.renderLottoTickets();
    } catch (error) {
      lottoContainer.init();
      alert(error.message);
      return;
    }

    this.winningNumberForm.openWinningNumberForm();
    $('.purchase-amount').value = '';

    const resultPopup = new ResultPopup(lottoContainer.getLottoTicketArray());
  }
}

export default App;
