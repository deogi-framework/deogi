Feature: Addition

  Scenario Outline: Add two number
    Given Two number <a> and <b>.
    When You add these two number.
    Then You get <c> for result.
    Examples:
      |a|b|c|
      |1|2|3|
      |2|2|4|
      |3|2|5|
      |4|2|6|
      |5|2|7|