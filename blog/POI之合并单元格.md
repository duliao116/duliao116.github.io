### 基础使用
```java
Row row = sheet.createRow(1);
Cell cell = row.createCell(1);
cell.setCellValue("some string");
// 合并第一行1~5列为一个单元格
sheet.addMergedRegion(new CellRangeAddress(1, 1, 1, 5));
```

### 性能问题
以上代码在平常的情况下是没有问题的，但是如果循环执行，如：
```java
for(int i = 0;i < 1000;i++){
    Row row = sheet.createRow(1);
    Cell cell = row.createCell(1);
    cell.setCellValue("some string");
    // 合并第一行1~5列为一个单元格
    sheet.addMergedRegion(new CellRangeAddress(1, 1, 1, 5));
}

```
此时，由于代码行
```java
sheet.addMergedRegion(new CellRangeAddress(1, 1, 1, 5));
```
的性能问题引起的运行时间累积会很明显，需要修改为
```java
sheet.addMergedRegionUnsafe(new CellRangeAddress(1, 1, 1, 5));
```
可以解决此类性能问题
