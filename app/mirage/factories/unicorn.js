import Mirage, {
  faker
}
from 'ember-cli-mirage';

const {
  Factory
} = Mirage;

export default Factory.extend({
  id() {
    return faker.random.number();
  },
  name() {
    return faker.name.firstName();
  },
  lastName() {
    return faker.name.lastName();
  },
  location() {
    return faker.address.city();
  },
  isHome() {
    return faker.random.boolean();
  }
});
