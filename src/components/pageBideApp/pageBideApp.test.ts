import PageBideApp from './pageBideApp';
import { accessibilityCheck, createComponent } from '../../shared/test-helper';
import { expect } from '@esm-bundle/chai';

describe('bide-app Component Spec:', () => {
  let element: HTMLElement;
  let shadow: ShadowRoot;

  describe('Default bide-app Component', () => {
    beforeEach(async () => {
      const component = await createComponent({
        class: PageBideApp,
        name: 'bide-app'
      });

      shadow = component.shadow;
      element = component.element;
    });

    it('should contain shadow root', () => {
      expect(shadow).to.not.be.undefined;
    });

    it('should be accessible', async () => {
      const result = await accessibilityCheck(element);
      expect(result.length).to.be.equal(0);
    });

    afterEach(() => {
      document.body.removeChild(element);
    });
  });
});
