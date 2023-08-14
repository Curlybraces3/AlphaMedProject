package com.project.backend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "commentsmaster")
public class CommentsMaster {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String PatientName;
    private String websiteOrCall;
    private String others;
    private String intials;
    private String worked_date;
    private String dos;
    private String encounter_number;
    private String no_of_insurance_available;
    private String no_of_insurance_verified;
    private String Payer;
    private String Status;
    private String outputData;
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getPatientName() {
        return PatientName;
    }

    public void setPatientName(String patientName) {
        PatientName = patientName;
    }

    public String getWebsiteOrCall() {
        return websiteOrCall;
    }

    public void setWebsiteOrCall(String websiteOrCall) {
        this.websiteOrCall = websiteOrCall;
    }

    public String getOthers() {
        return others;
    }

    public void setOthers(String others) {
        this.others = others;
    }

    public String getIntials() {
        return intials;
    }

    public void setIntials(String intials) {
        this.intials = intials;
    }

    public String getWorked_date() {
        return worked_date;
    }

    public void setWorked_date(String worked_date) {
        this.worked_date = worked_date;
    }

    public String getDos() {
        return dos;
    }

    public void setDos(String dos) {
        this.dos = dos;
    }

    public String getEncounter_number() {
        return encounter_number;
    }

    public void setEncounter_number(String encounter_number) {
        this.encounter_number = encounter_number;
    }

    public String getNo_of_insurance_available() {
        return no_of_insurance_available;
    }

    public void setNo_of_insurance_available(String no_of_insurance_available) {
        this.no_of_insurance_available = no_of_insurance_available;
    }

    public String getNo_of_insurance_verified() {
        return no_of_insurance_verified;
    }

    public void setNo_of_insurance_verified(String no_of_insurance_verified) {
        this.no_of_insurance_verified = no_of_insurance_verified;
    }

    public String getPayer() {
        return Payer;
    }

    public void setPayer(String payer) {
        Payer = payer;
    }

    public String getStatus() {
        return Status;
    }

    public void setStatus(String status) {
        Status = status;
    }

    public String getOutputData() {
        return outputData;
    }

    public void setOutputData(String outputData) {
        this.outputData = outputData;
    }

    @Override
    public String toString() {
        return "CommentsMaster{" +
                "id=" + id +
                ", PatientName='" + PatientName + '\'' +
                ", websiteOrCall='" + websiteOrCall + '\'' +
                ", others='" + others + '\'' +
                ", intials='" + intials + '\'' +
                ", worked_date='" + worked_date + '\'' +
                ", dos='" + dos + '\'' +
                ", encounter_number='" + encounter_number + '\'' +
                ", no_of_insurance_available='" + no_of_insurance_available + '\'' +
                ", no_of_insurance_verified='" + no_of_insurance_verified + '\'' +
                ", Payer='" + Payer + '\'' +
                ", Status='" + Status + '\'' +
                ", outputData='" + outputData + '\'' +
                '}';
    }

}
