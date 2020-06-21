import { DefaultError } from "../errors";

/**
 * T : 전달 받고자하는 객체의 클래스
 */
export default abstract class DTO<T> {

    protected checkRequireds(){
        const titles:string[] = this.requireds();
        
        for (let i = 0; i < titles.length; i++) {
            const required = (this as any)[titles[i]];
            if( required === null || required === undefined)
                throw new DefaultError(`${titles[i]} is requried.`);
        }
    }

    /**
     *  DTO 에서 전달 받고 싶은 객체를 가져옵니다.
     */
    public getTarget():T{
        this.checkRequireds();
        return this.newTarget();
    }

    /**
     *  여기에 전달하려는 타겟 객체를 생성하는 로직을 작성합니다.
     */
    protected abstract newTarget():T;

    protected abstract requireds():string[];
    
}
