import { t } from '../../support/locales'
import { LANGUAGE, VIEWPORT_LIST } from '../../configs'
import home from '../../fixtures/data/home/elements.json'

describe(`${LANGUAGE} | Test Profile page`, () => {
  beforeEach(() => {
    cy.logout()
    cy.serviceUserDelete()
    cy.serviceUserCreateAndLogin()
  })

  VIEWPORT_LIST.forEach(([size, viewport]) => {
    describe(`On | ${size}`, () => {
      beforeEach(() => {
        cy.viewport(viewport)
        cy.visit('/')
      })

      it('Should show as expect', () => {
        cy.get(home.EMAIL_LABEL).should('contain.text', t('common.user.email'))
        /* TODO: check home.ABOUT_BUTTON */
        cy.get(home.ABOUT_BUTTON).should('have.attr', 'href', '/about').and('visible')
        /* TODO: check home.SIGN_OUT_BUTTON */
        cy.get(home.SIGN_OUT_BUTTON).should('have.attr', 'href', '/signout').and('visible')
        /* TODO: check home.NICKNAME_LABEL */
        cy.get(home.NICKNAME_LABEL).should('contain.text', t('common.user.nickname'))
        /* TODO: check home.AVATAR_IMAGE - contain ';base64,' */
        cy.get(home.AVATAR_IMAGE).invoke('attr', 'src').should('contain', ';base64,')
      })
    })
  })
})
