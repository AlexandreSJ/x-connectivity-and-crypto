import { Component, OnInit } from '@angular/core';

class Coin {
  private prefix: string;
  private exchange: number;

  constructor(prefix: string, exchange: number) {
    this.prefix = prefix;
    this.exchange = exchange;
  }

  private convertToNumber(value: string): number {
    return Number(value.replace(/\D/g, ''));
  }

  private getNumberExchange(value: number): number {
    return Math.floor(value * this.exchange);
  }

  private getStringResult(value: number): string {
    return `${this.prefix} ${value.toFixed(2)}`.replace('.', ',');
  }

  getExchange(value: string): string {
    return this.getStringResult(
      this.getNumberExchange(this.convertToNumber(value)) / 100
    );
  }

  format(value: string): string {
    return this.getStringResult(this.convertToNumber(value) / 100);
  }
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  real = new Coin('R$', 0.5);
  xCoin = new Coin('X$', 2);

  inputCoin = 'R$ 0,00';
  inputXCoin = 'X$ 0,00';

  constructor() {}

  ngOnInit() {}

  onInputReal(value: string) {
    this.inputXCoin = this.xCoin.getExchange(value);
    this.inputCoin = this.real.format(value);
  }

  onInputXCoin(value: string) {
    this.inputCoin = this.real.getExchange(value);
    this.inputXCoin = this.xCoin.format(value);
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
