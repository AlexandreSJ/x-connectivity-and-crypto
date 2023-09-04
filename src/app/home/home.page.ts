import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  constructor() {}
  coin = 'R$ 0,00';
  conCoin = 'X$ 0,00';

  ngOnInit() {}

  setCoin(value: string) {
    value = value.replace(/\D/g, ''); //Remove tudo o que não é dígito
    const num = Number(value) / 100;

    value = `R$ ${(num / 2).toFixed(2)}`;

    value = value.replace('.', ',');

    return value;
  }

  formatCoin(value: string) {
    value = value.replace(/\D/g, ''); //Remove tudo o que não é dígito
    const num = Number(value) / 100;

    value = `R$ ${num.toFixed(2)}`;

    value = value.replace('.', ',');

    return value;
  }

  setConCoin(value: string) {
    value = value.replace(/\D/g, ''); //Remove tudo o que não é dígito
    const num = Number(value) / 100;

    value = `X$ ${(num * 2).toFixed(2)}`;

    value = value.replace('.', ',');
    return value;
  }

  formatConCoin(value: string) {
    value = value.replace(/\D/g, ''); //Remove tudo o que não é dígito
    const num = Number(value) / 100;

    value = `X$ ${num.toFixed(2)}`;

    value = value.replace('.', ',');
    return value;
  }

  swapInput() {
    const swapInputElement = document.getElementById('swap-input');

    const flexDirectionMap = new Map<string, string>([
      ['column-reverse', 'column'],
      ['column', 'column-reverse'],
      ['', 'column-reverse'], // default == column == empty
    ]);

    const currentFlexDirection = this.getFlexDirection(swapInputElement);

    const newFlexDirection = flexDirectionMap.get(currentFlexDirection) ?? '';

    swapInputElement?.style.setProperty('flex-direction', newFlexDirection);

    const coin = document.getElementById('moeda');
    const conCoin = document.getElementById('moeda-con');

    const isConCoinDisabled = conCoin?.getAttribute('disabled') === 'true';

    coin?.setAttribute('disabled', `${isConCoinDisabled}`);
    conCoin?.setAttribute('disabled', `${!isConCoinDisabled}`);
  }

  private getFlexDirection(element: HTMLElement | null): string {
    return element?.style.getPropertyValue('flex-direction') ?? '';
  }
}
