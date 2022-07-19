export class Config {
  private readonly config;

  constructor() {
    this.config = require(`@Config/${global['CONFIG_NAME']}/config`).default;
  }

  get(key: string): string {
    return this.config[key];
  }
}
