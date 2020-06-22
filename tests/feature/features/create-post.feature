@create-post
Feature: Post

  Scenario Outline: Publish posts
    Given You write post on blog - title : <title> and description <desc>.
    When You save post.
    Then You get to have post on list.
    Examples:
      |title|desc|
      |"hello"|"world"|
      |"hello2"|"world2"|
      |"hello3"|"world3"|
      |"hello4"|"world4"|
      |"hello5"|"world5"|
