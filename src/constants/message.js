const MESSAGE = {
  PURCHASE_AMOUNT: '> 구입금액을 입력해 주세요.',
  NUMBER_OF_TICKETS_PURCHASED: '개를 구매했습니다.',
  ENTER_WINNING_NUMBERS: '\n> 당첨 번호를 입력해 주세요. ',
  ENTER_BONUS_NUMBER: '\n> 보너스 번호를 입력해 주세요. ',
  WINNING_STATS: '\n당첨 통계',
  SEPARATOR: '--------------------',
  PROFIT: '총 수익률은 _%입니다.',
  RESTART: '\n> 다시 시작하시겠습니까? (y/n)',
};

const RESULT = {
  FIRST: `6개 일치 (2,000,000,000원) - `,
  SECOND: `5개 일치, 보너스 볼 일치 (30,000,000원) - `,
  THIRD: `5개 일치 (1,500,000원) - `,
  FOURTH: `4개 일치 (50,000원) - `,
  FIFTH: `3개 일치 (5,000원) - `,
};

const PREFIX = '[ERROR]';

const ERROR = {
  INVALID_UNIT: `${PREFIX} 구입 금액은 1,000원 단위로 입력해야 합니다.`,
  INVALID_LENGTH: `${PREFIX} 6개의 당첨번호를 입력해야 합니다.`,
  OUT_OF_RANGE: `${PREFIX} 로또 번호의 숫자 범위는 1에서 45까지의 수입니다.`,
  DUPLICATE_NUMBER: `${PREFIX} 중복되는 번호가 존재합니다.`,
  INVALID_NUMBER_FORMAT: `${PREFIX} 유효하지 않은 숫자 형식입니다.`,
  DUPLICATE_WINNING_NUMBER: `${PREFIX} 보너스 번호가 당첨 번호와 중복됩니다.`,
  BONUS_NUMBER_IS_OUT_OF_RANGE: `${PREFIX} 보너스 번호의 숫자 범위는 1에서 45까지의 수입니다.`,
  MIN_PURCHASE_AMOUNT: `${PREFIX} 최소 구매 금액은 1,000원 입니다.`,
  RESTART_OR_EXIT: `${PREFIX} y(재시작) 또는 n(종료)을 입력하여야 합니다.`,
};

export { MESSAGE, RESULT, ERROR };
