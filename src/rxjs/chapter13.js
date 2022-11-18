import { of } from "rxjs";

// of，将参数列表作为数据流返回
of("a", "b", "c", [], true, 20, {}).subscribe(v => console.log(v))