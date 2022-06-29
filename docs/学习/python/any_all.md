---
title: any_all
tags:
  - python
---
```python
numbers = [1,2,3,4,5,6]

# True 其中有数字大于3
print(any(number > 3 for number in numbers))
# False 没有数字大于6
print(any(number > 6 for number in numbers))

# True 所有数字都大于等于1
print(all(number >= 1 for number in numbers))
# False 有数字不大于1
print(all(number > 1 for number in numbers))
```

