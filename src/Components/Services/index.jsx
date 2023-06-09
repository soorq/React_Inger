import React from "react";

import {
    ServicesContainer,
    ServiceH1,
    SeviceWrapper,
    ServiceCard,
    ServiceIcon,
    ServiceH2,
    ServiceP
} from './ServicesElement'

import Icon1 from '../../images/ServicecSvg-1.svg'
import Icon2 from '../../images/ServicecSvg-2.svg'
import Icon3 from '../../images/ServicecSvg-3.svg'

const Service = () => {
    return(
        <ServicesContainer>
            <ServiceH1>If u need help try to call later and die u operator</ServiceH1>
            <SeviceWrapper>
                <ServiceCard>
                    <ServiceIcon src={Icon1} />
                    <ServiceH2>Качественные Материалы</ServiceH2>
                    <ServiceP>Гарантируем надежность продукции, обеспечивая качество материалов, комплектующих и каждого этапа производства</ServiceP>
                </ServiceCard>
                <ServiceCard>
                    <ServiceIcon src={Icon2} />
                    <ServiceH2>Автоматизация</ServiceH2>
                    <ServiceP>АСУ конвейерных систем позволяет управлять всем процессом транспортировки и каждым этапом в отдельности</ServiceP>
                </ServiceCard>
                <ServiceCard>
                    <ServiceIcon src={Icon3} />
                    <ServiceH2>Индивидуальный Подход</ServiceH2>
                    <ServiceP>Учитываются все нюансы производства, техпроцесса и требований заказчика по качеству, оптимизации и автоматизации процесса</ServiceP>
                </ServiceCard>
            </SeviceWrapper>
        </ServicesContainer>
    )
}

export default Service