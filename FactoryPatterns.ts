interface ReportDocument {
    header: String;
    footer: String;
    generate(): void;
}

class PDFReport implements ReportDocument {
    header: String;
    footer: String;
    constructor(reportComponentFactory: ReportComponentFactory) {
        this.header = reportComponentFactory.createHeader();
        this.footer = reportComponentFactory.createFooter();
     }
   
    generate() {
        console.log('PDF Report generated' + 'with' + this.header + 'and' + this.footer);
    }
}

class ExcelReport implements ReportDocument {

    header: String;
    footer: String;
    constructor(reportComponentFactory: ReportComponentFactory) {
        this.header = reportComponentFactory.createHeader();
        this.footer = reportComponentFactory.createFooter();
     }
    generate() {
        console.log('Excel Report generated' + 'with' + this.header + 'and' + this.footer);
    }
}


abstract class ReportStore {
    reportComponentFactory: ReportComponentFactory;
    constructor(reportComponentFactory: ReportComponentFactory) {
        this.reportComponentFactory = reportComponentFactory;
    }
    public orderReport(type: string): ReportDocument {
        const report = this.createReport(type);
        report.generate();
        return report;
    }

    protected abstract createReport(type: string): ReportDocument;
}

class USReportStore extends ReportStore {
    
    protected createReport(type: string): ReportDocument {
        return new PDFReport(this.reportComponentFactory);
    }
}

class EUReportStore extends ReportStore {
    
    protected createReport(type: string): ReportDocument {
        return new ExcelReport(this.reportComponentFactory);
    }
}


interface ReportComponentFactory{
    createHeader(): String;
    createFooter(): String;
}

class USComponentFactory implements ReportComponentFactory{
    createHeader(): String {
        return 'US Header';
    }

    createFooter(): String {
        return 'US Footer';
    }
}

class EUComponent implements ReportComponentFactory{
    createHeader(): String {
        return 'EU Header';
    }

    createFooter(): String {
        return 'EU Footer';
    }
}

const usReportStore: ReportStore = new USReportStore(new USComponentFactory());
usReportStore.orderReport("PDF Report");