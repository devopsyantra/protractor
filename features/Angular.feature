Feature: To perform basic operation in angular website

    @AngularScenario
    Scenario: Protractor Google
      Given I am on Angular page with title "AngularJS — Superheroic JavaScript MVW Framework"
      When I type "Tech Mahindra From TYSS"
      Then I am greeted as "Hello Tech Mahindra From TYSS!"
      Then I clear search textbox
      Then I scroll to bottom of the page
      Then I click back to top button





